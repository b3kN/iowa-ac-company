"use client";

import { Box } from "@chakra-ui/react";
import styles from "./about.module.css";

export default function About() {
  return (
    <Box className={styles.main}>
      <Box className={styles.description}>
        <h1>Hello World</h1>
      </Box>
    </Box>
  );
}
