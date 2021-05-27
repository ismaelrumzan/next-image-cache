import Image from 'next/image'

export default function Home({image}) {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h3>{image}</h3>
      <Image
        src={encodeURI(image)}
        width={800}
        height={800}
      />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
        image: 'https://vercel-cse.s3.eu-central-1.amazonaws.com/imagecache.jpg',
    },
    revalidate: 1,
  }
}