import styled from "styled-components";

export const Styled = styled.div`
  background-color: darkslategrey;
  display: flex;
  width: 100%;

  main {
    background-color: beige;
    display: flex;
    width: 100%;
    padding: 50px;
    align-items: center;
    flex-direction: column;
  }

  main h1,
  main h3 {
    color: darkred;
    font-weight: bold;
  }

  main p {
    font-family: "FiraCode_Regular", monospace;
    font-size: 16px;
  }

  .red {
    color: red;
  }

  aside {
    background-color: #ffffff10;
    display: flex;
    flex-direction: column;
    padding: 50px;
    width: 450px;
    min-height: 100%;
    align-items: center;
    overflow: auto;
    overflow-x: hidden;
    height: 100vh;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  h1 {
    color: aliceblue;
    font-size: 32px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
  }

  h3 {
    color: aliceblue;
    font-size: 20px;
    margin: 10px;
    text-align: center;
  }

  hr {
    width: 100%;
    margin: 10px;
  }

  .input-container {
    margin: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  label {
    display: flex;
    color: aliceblue;
    font-size: 18px;
    font-weight: 600;
    height: 100%;
    align-items: center;
    text-align: center;
  }

  input {
    width: 33%;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    min-height: 40px;
    padding: 5px 10px;
  }

  button {
    background-color: aliceblue;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    height: 40px;
    margin: 20px;
    width: 200px;
  }
`;
