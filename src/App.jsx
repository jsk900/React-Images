//import NormalImports from './components/NormalImports';
//import NormalFromPublic from './components/NormalFromPublic';
//import RequireFromPublicFile from './components/RequireFromPublicFile';

import RequireFromDataFile from './components/RequireFromDataFile';
import './App.css';

const App = () => {
  return (
    <main>
      <h1>Welcome to React</h1>
      {/* <NormalImports /> */}
      {/* <NormalFromPublic /> */}
      {/* <RequireFromPublicFile /> */}
      <RequireFromDataFile />
    </main>
  );
};

export default App;
