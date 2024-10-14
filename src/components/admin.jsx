import { Box, Grid, Button, Text, Stack, useColorMode } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateData, deleteData } from "../redux/action";

import { useEffect, useState } from "react";


export function Admin() {
  let dispatch = useDispatch();

  let data = useSelector((state) => state.data || []);
  let loading = useSelector((state) => state.loading);
  let error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  function handleUpdate(id) {
    let duration = prompt("Your updated duration here");
    let fees = prompt("Your updated fees here");

    let obj = { duration, fees };

    let payload = { id: id, obj };

    dispatch(updateData(payload));
  }
  function handleDelete(id) {
    dispatch(deleteData(id));
  }

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <Box mt={12} ml={8}>
        <Box>
         
        </Box>

        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {Object.entries(data).map(([id, ele], i) => {
            if (!ele || !ele.duration || !ele.fees) {
              return null; // Skip rendering if data is invalid
            }
            return (
              <Box pl={9} textAlign="center"  boxShadow='inner' p='6' rounded='md' bg='skyblue'> 
                
                <p>Course:{ele.course}</p>
                <p>Duration:{ele.duration}</p>
                <p>Fees:{ele.fees}</p>
                <Button mr={4} onClick={() => handleUpdate(id)}>Update</Button>
                <Button onClick={() => handleDelete(id)}>Delete</Button>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}


