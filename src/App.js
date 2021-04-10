import {useTransactions} from "./hooks/use-transactions";
import {Container} from "@material-ui/core";
import TitleBar from "./components/title-bar";
import TransactionList from "./components/transaction-list";
import Loading from "./components/loading";
import Error from "./components/error";

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
