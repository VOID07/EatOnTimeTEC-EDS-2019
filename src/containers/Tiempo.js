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

const Tiempo = () => {
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
      title="Tiempo límite para hacer modificaciones"
      navigation="Application / Time page"
    >
      <form>
        <TextField
          hintText="duración en minutos"
          floatingLabelText="tiempo"
          fullWidth={true}
        />

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

export default Tiempo;
