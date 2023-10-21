import EditUsername from "./edit-username";

function Header() {
  return (
    <header className="relative flex items-center justify-between sm:justify-normal">
      <h1 className="text-xl font-bold sm:mx-auto sm:text-3xl">
        MINI MESSAGE BOARD
      </h1>

      <EditUsername />
    </header>
  );
}

export default Header;
