import {useTransactions} from "../../hooks/use-transactions";
import {Container} from "@material-ui/core";
import TitleBar from "../title-bar";
import TransactionList from "../transaction-list";
import Loading from "../loading";
import Error from "../error";

const App = () => {
  const {err, ready, transactions} = useTransactions();

  return (
    <div>
      <TitleBar />
      <Container>
        {err ? (
          <Error message={err.message} />
        ) : ready ? (
          <TransactionList transactions={transactions} />
        ) : (
          <Loading />
        )}
      </Container>
    </div>
  );
};

export default App;
