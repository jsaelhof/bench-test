import {useTransactions} from "../../hooks/use-transactions";
import {Container} from "@material-ui/core";
import TitleBar from "../title-bar";
import TransactionsDashboard from "../transactions-dashboard";
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
          <TransactionsDashboard transactions={transactions} />
        ) : (
          <Loading />
        )}
      </Container>
    </div>
  );
};

export default App;
