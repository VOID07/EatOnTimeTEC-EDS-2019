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
import Data from "../data";

function money(data) {
  Data.descuentos.dinero = data;
}
const Descuentos = () => {
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
      title="Dinero para descuentos"
      navigation="EatOnTimeTec / Descuentos"
    >
      <form>
        <TextField
          hintText="Dinero para descuentos"
          floatingLabelText="Dinero"
          fullWidth={true}
          label="Dinero"
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

export default Descuentos;
