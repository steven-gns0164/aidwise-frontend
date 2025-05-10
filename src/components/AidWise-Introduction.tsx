import './AidWise-Introduction.css';


interface ContainerProps {
  name: string;
}

const AidWiseIntroduction: React.FC<ContainerProps> = ({ name }) => {
  return (
    <section className="intro">
      <h1>{name}</h1>
      <br />
      <p>AidWise adalah aplikasi digital yang dirancang untuk mendukung pemerataan bantuan 
        sosial di Indonesia, terutama dari program-program seperti PKH (Program Keluarga Harapan) 
        dan BPNT (Bantuan Pangan Non-Tunai). Aplikasi ini membantu memastikan bahwa bantuan sosial 
        diterima oleh keluarga yang benar-benar membutuhkan melalui fitur pendataan yang akurat, 
        pemantauan distribusi bantuan secara real-time, serta deteksi terhadap tumpang tindih 
        penerima agar tidak terjadi ketidaktepatan sasaran. AidWise juga mempermudah kerja pendamping 
        sosial dan pihak berwenang dalam mengevaluasi efektivitas program, membuat laporan, serta 
        memberikan rekomendasi kebijakan berbasis data. Dengan sistem yang transparan dan terintegrasi, 
        AidWise berkontribusi dalam memperkuat akuntabilitas dan meningkatkan efisiensi penyaluran 
        bantuan sosial, sehingga tujuan utama dari perlindungan sosial—yakni pengurangan kemiskinan 
        dan peningkatan kualitas hidup masyarakat—dapat tercapai secara merata.</p>
    </section>
  );
};

export default AidWiseIntroduction;
