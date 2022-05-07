import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header className="App-header">
      <h1 className="display-1" id="page-title">{props.title}</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;