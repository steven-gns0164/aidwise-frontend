import './AidWise-PKH-Form.css';
import AidWiseTeam from './AidWise-Team';
import AidWiseIntroduction from './AidWise-Introduction';

interface ContainerProps {
  name: string;
}

const PKHForm: React.FC<ContainerProps> = ({ name: title }) => {
  return (
    <section className='form'>
     <div className="header">
        <p><strong>PKH</strong> Program Keluarga Harapan</p>
        <p>
        PKH (Program Keluarga Harapan) adalah bantuan sosial bersyarat dari pemerintah untuk 
        keluarga miskin yang memiliki anggota seperti ibu hamil, balita, anak sekolah, lansia, 
        atau disabilitas. Bantuan diberikan secara berkala dan penerima wajib memenuhi syarat 
        di bidang pendidikan dan kesehatan. Tujuannya adalah memutus rantai kemiskinan dan 
        meningkatkan kualitas hidup keluarga penerima.
        </p>
  </div>

  <div className="form-box">
    <h2>Form<br />Program Keluarga Harapan</h2>

    <label>Umur:</label>
    <input type="number" name="umur" />

    <label>Pendapatan per Tahun:</label>
    <input type="text" name="pendapatan" />

    <label>Jumlah Anak:</label>
    <input type="number" name="anak" />

    <label>Status Pernikahan:</label>
    <div className="checkbox-group">
      <input type="checkbox" id="single" />
      <label form="single">Single</label>
      <input type="checkbox" id="menikah" />
      <label form="menikah">Menikah</label>
    </div>

    <button className="button-enter" type="submit">Enter</button>
  </div>
    </section>
  )
}

export default PKHForm;
