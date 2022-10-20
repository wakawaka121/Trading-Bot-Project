import styled from "@emotion/styled";
import {
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Accordion,
  AccordionSummary,
  useTheme,
  Box,
  AccordionDetails,
  DialogActions,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../Header";
import { useState } from "react";

function StockDetail({
  index,
  open,
  setOpen,
  botNameArr,
  detailDesc,
  detailFirst,
  detailSecond,
  detailEPS,
  detailRatio,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  const openDeleteDialog = () => {
    setDeleteOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteOpen(false);
  };

  const handleDeleteRobot = () => {
    const list = window.localStorage.getItem('bots').split(',');
    const temp = list.slice(0,index);
    const temp2 = list.slice(index + 1,list.length - 1);
    const comb = [...temp] + [...temp2];
    window.localStorage.setItem('bots', comb);
    console.log(window.localStorage.getItem('bots'));
    closeDeleteDialog();
    handleDialogClose();
  };

  const ViewButton = styled.div`
    button {
      max-width: 80px;
      min-width: 80px;
      height: 40px;
      border: none;
      font-size: 16px;
      box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      background-color: ${colors.greenAccent[600]};
      color: ${colors.primary};
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease-in;
      &:hover {
        transform: translateY(-3px);
      }
    }
  `;

  const DeleteButton = styled.div`
    button {
      max-width: 140px;
      min-width: 140px;
      height: 60px;
      border: none;
      font-size: 16px;
      box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      background-color: ${colors.redAccent[600]};
      color: ${colors.primary};
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease-in;
      &:hover {
        transform: translateY(-3px);
      }
    }
  `;

  return (
    <Dialog open={open} onClose={handleDialogClose} maxWidth="true">
      <DialogTitle>
        <Box p={1}>
          <Header title={botNameArr[index]} subtitle="Bot Details" />
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
          p={1}
          textAlign="center"
        >
          Stock Details
        </Typography>
        <Divider sx={{ marginBottom: 3 }} />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            Stock Description
          </AccordionSummary>
          <AccordionDetails>
            <Box
              width={1000}
              display="flex"
              flexDirection="row"
              justifyContent="start"
            >
              <Box width={1000} display="flex" flexDirection="column">
                {detailDesc.map((_name, _index) => {
                  return (
                    <div key={_index} style={{ flexGrow: 1 }}>
                      <Box display="flex" flexDirection="row">
                        <Typography variant="h5" p={1} flexGrow={1}>
                          {detailDesc[_index]["key"]}
                        </Typography>
                        <Typography
                          variant="h5"
                          p={1}
                          fontWeight={700}
                          textAlign="end"
                        >
                          {detailDesc[_index]["val"]}
                        </Typography>
                      </Box>
                      <Divider sx={{ marginBottom: 1 }} />
                    </div>
                  );
                })}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            EPS & Return
          </AccordionSummary>
          <AccordionDetails>
            <Box
              width={1000}
              display="flex"
              flexDirection="row"
              justifyContent="start"
            >
              <Box width={1000} display="flex" flexDirection="column">
                {detailEPS.map((_name, _index) => {
                  return (
                    <div key={_index} style={{ flexGrow: 1 }}>
                      <Box display="flex" flexDirection="row">
                        <Typography variant="h5" p={1} flexGrow={1}>
                          {detailEPS[_index]["key"]}
                        </Typography>
                        <Typography
                          variant="h5"
                          p={1}
                          fontWeight={700}
                          textAlign="end"
                        >
                          {detailEPS[_index]["val"]}
                        </Typography>
                      </Box>
                      <Divider sx={{ marginBottom: 1 }} />
                    </div>
                  );
                })}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            Ratio
          </AccordionSummary>
          <AccordionDetails>
            <Box
              width={1000}
              display="flex"
              flexDirection="row"
              justifyContent="start"
            >
              <Box width={1000} display="flex" flexDirection="column">
                {detailRatio.map((_name, _index) => {
                  return (
                    <div key={_index} style={{ flexGrow: 1 }}>
                      <Box display="flex" flexDirection="row">
                        <Typography variant="h5" p={1} flexGrow={1}>
                          {detailRatio[_index]["key"]}
                        </Typography>
                        <Typography
                          variant="h5"
                          p={1}
                          fontWeight={700}
                          textAlign="end"
                        >
                          {detailRatio[_index]["val"]}
                        </Typography>
                      </Box>
                      <Divider sx={{ marginBottom: 1 }} />
                    </div>
                  );
                })}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            Advanced Details
          </AccordionSummary>
          <AccordionDetails>
            <Box
              width={1000}
              height={800}
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <Box width={360} display="flex" flexDirection="column">
                {detailFirst.map((_name, _index) => {
                  return (
                    <div key={_index} style={{ flexGrow: 1 }}>
                      <Box display="flex" flexDirection="row">
                        <Typography variant="h5" p={1} flexGrow={1}>
                          {detailFirst[_index]["key"]}
                        </Typography>
                        <Typography
                          variant="h5"
                          p={1}
                          fontWeight={700}
                          textAlign="end"
                        >
                          {detailFirst[_index]["val"]}
                        </Typography>
                      </Box>
                    </div>
                  );
                })}
              </Box>
              <Box width={360} display="flex" flexDirection="column">
                {detailSecond.map((_name, _index) => {
                  return (
                    <div key={_index} style={{ flexGrow: 1 }}>
                      <Box display="flex" flexDirection="row">
                        <Typography variant="h5" p={1} flexGrow={1}>
                          {detailSecond[_index]["key"]}
                        </Typography>
                        <Typography
                          variant="h5"
                          p={1}
                          fontWeight={700}
                          textAlign="end"
                        >
                          {detailSecond[_index]["val"]}
                        </Typography>
                      </Box>
                    </div>
                  );
                })}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "12px 0 5px 0" }}
          p={1}
          textAlign="center"
        >
          Buy Conditions
        </Typography>
        <Divider sx={{ marginBottom: 3 }} />
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "12px 0 5px 0" }}
          p={1}
          textAlign="center"
        >
          Sell Conditions
        </Typography>
        <Divider sx={{ marginBottom: 3 }} />
        <Box display="flex" alignItems="center" justifyContent="center">
          <DeleteButton>
            <button onClick={openDeleteDialog}>Delete Robot</button>
          </DeleteButton>
        </Box>
        <Dialog open={deleteOpen} onClose={closeDeleteDialog}>
          <DialogTitle fontWeight="bold" variant="h4">
            WARNING
          </DialogTitle>
          <DialogContent>
            <Typography variant="h5">
              Are you sure you want to delete robot '{botNameArr[index]}'?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ color: colors.primary[100], fontWeight: 700, fontSize: 16 }}
              onClick={handleDeleteRobot}
            >
              Confirm
            </Button>
            <Button
              sx={{
                color: colors.redAccent[500],
                fontWeight: 700,
                fontSize: 16,
              }}
              onClick={closeDeleteDialog}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </DialogContent>
      <DialogActions>
        <ViewButton>
          <button onClick={handleDialogClose}>CLOSE</button>
        </ViewButton>
      </DialogActions>
    </Dialog>
  );
}

export default StockDetail;
