import './AidWise-Team.css';


interface ContainerProps {
  name: string;
}

const AidWiseTeam: React.FC<ContainerProps> = ({ name }) => {
  return (
    <section className='team'>
        <div className="team-section">
            <h2 className="team-title">{name}</h2>
        <div className="team-container">
        <div className="team-member">
            <img className='image' src="peter.png" alt="Peter"/>
            <p>Peter Kurniawan Oktaviatnus</p>
        </div>
        <div className="team-member">
            <img className='image' src="devid.png" alt="Devid"/>
            <p>Devid Laritsan Manurung</p>
        </div>
        <div className="team-member">
            <img className='image' src="steven.png" alt="Steven" />
            <p>Steven Nicholas Saputra</p>
        </div>
    </div>
</div>

    </section>
  );
};

export default AidWiseTeam;