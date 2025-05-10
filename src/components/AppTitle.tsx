import './AppTitle.css';
import AidWiseTeam from './AidWise-Team';
import AidWiseIntroduction from './AidWise-Introduction';

interface ContainerProps {
  name: string;
}

const AppTitle: React.FC<ContainerProps> = ({ name: title }) => {
  return (
     <section className="program-section">
    <div className="program pkh">
      <h2>PKH</h2>
      <p>PKH (Program Keluarga Harapan) adalah bantuan sosial bersyarat dari pemerintah 
        untuk keluarga miskin yang memiliki anggota seperti ibu hamil, balita, anak sekolah, 
        lansia, atau disabilitas. Bantuan diberikan secara berkala dan penerima wajib memenuhi 
        syarat di bidang pendidikan dan kesehatan. Tujuannya adalah memutus rantai kemiskinan dan meningkatkan kualitas hidup keluarga penerima.</p>
      <button>Click Here</button>
    </div>
    <div className="program bpnt">
      <h2>BPNT</h2>
      <p>BPNT (Bantuan Pangan Non-Tunai) adalah program bantuan sosial dari pemerintah Indonesia 
        yang ditujukan kepada keluarga miskin atau rentan miskin. Bantuan diberikan dalam bentuk 
        saldo elektronik setiap bulan, yang hanya bisa digunakan untuk membeli bahan pangan seperti 
        beras, telur, dan sayuran di e-warung. Program ini bertujuan meningkatkan ketahanan pangan, 
        perbaikan gizi, dan mendukung transaksi non-tunai di masyarakat. </p>
      <button>Click Here</button>
    </div>
  </section>
  
  )
}

export default AppTitle;
