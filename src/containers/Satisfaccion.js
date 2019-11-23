import React from "react";
import { Link } from "react-router";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentCreate from "material-ui/svg-icons/content/create";
import ContentAdd from "material-ui/svg-icons/content/add";
import { pink500, grey200, grey500 } from "material-ui/styles/colors";
import PageBase from "../components/PageBase";
import Data from "../data";

const TablePage = () => {
  const styles = {
    floatingActionButton: {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed"
    },
    editButton: {
      fill: grey500
    },
    columns: {
      id: {
        width: "10%"
      },
      comentario: {
        width: "30%"
      }
    }
  };

  return (
    <PageBase title="Comentarios" navigation="Application / comentarios">
      <div>
        <Link to="/form">
          <FloatingActionButton
            style={styles.floatingActionButton}
            backgroundColor={pink500}
          >
            <ContentAdd />
          </FloatingActionButton>
        </Link>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={styles.columns.id}>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.comentario}>
                Comentario
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Data.feedback.comentarios.map(item => (
              <TableRow key={item.valor}>
                <TableRowColumn style={styles.columns.id}>
                  {item.id}
                </TableRowColumn>
                <TableRowColumn style={styles.columns.comentario}>
                  {item.text}
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PageBase>
  );
};

export default TablePage;
