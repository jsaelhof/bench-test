import {useTransactions} from "./hooks/use-transactions";
import {Container} from "@material-ui/core";
import TitleBar from "./components/title-bar";
import TransactionList from "./components/transaction-list";

const App = () => {
  const {err, ready, transactions} = useTransactions();

  return (
    <div>
      <TitleBar />
      <Container>
        {err ? (
          err.message
        ) : ready ? (
          <TransactionList transactions={transactions} />
        ) : (
          "Loading"
        )}
      </Container>
    </div>
  );
};

export default App;
