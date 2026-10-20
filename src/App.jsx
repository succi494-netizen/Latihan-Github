import KartuProfil from './components/KartuProfil.jsx';

export default function App() {
  return (
    <main>
      <h1>Judul Halaman</h1>
      <KartuProfil nama="Budi" peran="Mahasiswa" tahun={2024} aktif={true} />
      <KartuProfil nama="Rahma" peran="Mahasiswa" tahun={2025} aktif={true} />
      <KartuProfil nama="Andi" peran="Mahasiswa" tahun={2026} aktif={false} />
    </main>
  );
}