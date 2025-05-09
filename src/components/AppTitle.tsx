import './AppTitle.css';

interface ContainerProps {
  name: string;
}

const AppTitle: React.FC<ContainerProps> = ({ name: title }) => {
  return (
    <div className="app-title">
      <strong>{title}</strong>
    </div>
  );
};

export default AppTitle;
