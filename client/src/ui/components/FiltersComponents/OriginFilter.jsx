import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  Typography,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import useFiltersStyles from "../../../app/pages/Filters/useFiltersStyles";
import { originCheckboxStateSelector } from "../../../store/selectors/selectors";
import { setOriginCheckboxState } from "../../../store/actions/filters.actions";

const OriginFilter = () => {
  const classes = useFiltersStyles();

  const [searchParams] = useSearchParams();

  const originCheckBoxState = useSelector(originCheckboxStateSelector);
  
  const [isOpenOriginCheckBox, setIsOpenOriginCheckBox] = useState(
    classes.isClosed
  );
  const [americanState, setAmericanState] = useState(false);
  const [englishState, setEnglishState] = useState(false);
  const [frenchState, setFrenchState] = useState(false);
  const [italianState, setItalianState] = useState(false);
  const [mexicanState, setMexicanState] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.get("origin") !== null) {
      dispatch(
        setOriginCheckboxState([...searchParams.get("origin").split(",")])
      );
    }
  }, []);

  useEffect(() => {
    originCheckBoxState.forEach((item) => {
      if (item === "american") {
        setAmericanState(true);
      }
      if (item === "english") {
        setEnglishState(true);
      }
      if (item === "french") {
        setFrenchState(true);
      }
      if (item === "italian") {
        setItalianState(true);
      }
      if (item === "mexican") {
        setMexicanState(true);
      }
    });
  }, [originCheckBoxState]);

  const toggleOriginCheckBox = () => {
    if (isOpenOriginCheckBox === classes.isClosed) {
      setIsOpenOriginCheckBox(classes.isOpen);
    } else {
      setIsOpenOriginCheckBox(classes.isClosed);
    }
  };

  const handleOriginChange = (event) => {
    if (event.target.checked) {
      dispatch(
        setOriginCheckboxState([...originCheckBoxState, event.target.name])
      );
    } else {
      if (event.target.name === "american") {
        setAmericanState(false);
      }
      if (event.target.name === "english") {
        setEnglishState(false);
      }
      if (event.target.name === "french") {
        setFrenchState(false);
      }
      if (event.target.name === "italian") {
        setItalianState(false);
      }
      if (event.target.name === "mexican") {
        setMexicanState(false);
      }

      const newOriginCheckBoxState = originCheckBoxState.filter(
        (option) => option !== event.target.name
      );
      dispatch(setOriginCheckboxState(newOriginCheckBoxState));
    }
  };

  return (
    <Container className={classes.filterContainer}>
      <Container className={classes.originFilterContainer}>
        <Typography variant="h5" className={classes.filterTitle}>
          Country of origin
        </Typography>
        <MoreIcon
          className={classes.moreIcon}
          onClick={toggleOriginCheckBox}
        ></MoreIcon>
      </Container>
      <Container className={isOpenOriginCheckBox}>
        <FormGroup>
          <FormControlLabel
            checked={americanState}
            control={<Checkbox onChange={handleOriginChange} name="american" />}
            label="American"
          />
          <FormControlLabel
            checked={englishState}
            control={<Checkbox onChange={handleOriginChange} name="english" />}
            label="English"
          />
          <FormControlLabel
            checked={frenchState}
            control={<Checkbox onChange={handleOriginChange} name="french" />}
            label="French"
          />
          <FormControlLabel
            checked={italianState}
            control={<Checkbox onChange={handleOriginChange} name="italian" />}
            label="Italian"
          />
          <FormControlLabel
            checked={mexicanState}
            control={<Checkbox onChange={handleOriginChange} name="mexican" />}
            label="Mexican"
          />
        </FormGroup>
      </Container>
    </Container>
  );
};

export default OriginFilter;
