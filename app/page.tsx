"use client";

import { Box } from "@chakra-ui/react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Box className={styles.main}>
      <Box className={styles.description}>
        <h1>Hello World</h1>
      </Box>
    </Box>
  );
}
