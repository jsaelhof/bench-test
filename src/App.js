import {useTransactions} from "./hooks/use-transactions";
import TransactionList from "./components/transaction-list";
import {Container} from "@material-ui/core";

const App = () => {
  const {err, ready, transactions} = useTransactions();

  return (
    <Container>
      {err ? (
        err.message
      ) : ready ? (
        <TransactionList transactions={transactions} />
      ) : (
        "Loading"
      )}
    </Container>
  );
};

export default App;
