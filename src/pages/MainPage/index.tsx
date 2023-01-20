import Form from "../../components/Form";
import Aside from "../../components/Aside";
import { MainDiv } from "./styles";

export function MainPage() {
  return (
    <>
      <MainDiv className="box">
        <Form></Form>
        <Aside></Aside>
      </MainDiv>
    </>
  );
}
