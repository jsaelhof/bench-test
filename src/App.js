import {useTransactions} from "./hooks/use-transactions";

const App = () => {
  const {err, ready, transactions} = useTransactions();

  return (
    <div>
      {err
        ? err.message
        : ready
        ? `Transactions Loaded: ${transactions.length}`
        : "Loading"}
    </div>
  );
};

export default App;
