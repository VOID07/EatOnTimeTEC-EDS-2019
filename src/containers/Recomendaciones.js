import React from "react";
import { Link } from "react-router";
import RaisedButton from "material-ui/RaisedButton";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import Toggle from "material-ui/Toggle";
import DatePicker from "material-ui/DatePicker";
import { grey400 } from "material-ui/styles/colors";
import Divider from "material-ui/Divider";
import PageBase from "../components/PageBase";

const Recomendar = () => {
  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: "right"
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase
      title="Configurar cantidad de recomendaciones"
      navigation="Application / Time page"
    >
      <form>
        <SelectField
          floatingLabelText="Cantidad de recomendaciones"
          value=""
          fullWidth={true}
        >
          <MenuItem key={0} primaryText="1" />
          <MenuItem key={1} primaryText="2" />
          <MenuItem key={2} primaryText="3" />
          <MenuItem key={3} primaryText="4" />
        </SelectField>

        <Divider />

        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancel" />
          </Link>

          <RaisedButton
            label="Save"
            style={styles.saveButton}
            type="submit"
            primary={true}
          />
        </div>
      </form>
    </PageBase>
  );
};

export default Recomendar;
