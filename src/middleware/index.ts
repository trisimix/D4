import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
  } from "./express/common";
  
  export default [handleCors, handleBodyRequestParsing, handleCompression];