const Icon = ({ iconName, size = "50px", color ="white" }: any) => {
    return (
      <span
        className="material-icons"
        style={{ fontSize: size, color:color }}>
        {iconName}
      </span>
    );
  };
  
  export default Icon;