import styled from "styled-components";

export const StyledForm = styled.form`
  @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=IBM+Plex+Sans:wght@200;400&family=Inter:wght@300;400;500;700&family=Mochiy+Pop+One&family=Montserrat:wght@400;700&family=Nunito:wght@700&family=Oswald&family=Poppins:ital,wght@0,200;0,500;1,300&family=Righteous&family=Roboto+Slab&family=Roboto:wght@100;400&family=Sarala&family=Source+Sans+Pro&display=swap");

  display: flex;
  flex-direction: column;
  width: 377px;
  gap: 18px;

  h2 {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 24px;
    line-height: 28px;

    color: #656565;
  }

  input {
    display: flex;
    padding: 5px;
    width: 251px;
    height: 25px;

    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }

  .form_section {
    display: flex;
    flex-direction: column;
  }

  .form_label {
    width: 251px;
    display: flex;
    padding-right: 10px;

    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    line-height: 16px;

    color: #656565;
  }

  .err_label {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    line-height: 16px;

    color: red;
  }

  span {
    width: 251px;
    height: 14px;

    display: flex;
    padding-right: 10px;

    font-family: "Source Sans Pro", sans-serif;
    font-size: 11px;
    font-weight: 900px;
    line-height: 13px;
    font-weight: bolder;

    color: #cecece;
  }

  .btn_calculate {
    border: 1px transparent;
    border-radius: 8px;
    width: 110px;
    height: 28px;
    justify-content: center;
    margin-left: 70px;
    font-family: "Source Sans Pro", sans-serif;
    cursor: pointer;

    background: rgb(26, 115, 232);

    &:hover {
      background: rgb(138, 180, 248);
      color: white;
    }
  }
`;
