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
      <Image
        src={image}
        width={800}
        height={800}
      />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
        image: 'https://www.omnycontent.com/d/clips/f895e4af-2068-409d-a7a7-aa9201219358/7b085e6d-da03-47aa-9505-ab18012c208d/e0587960-22f2-4242-89ce-ab21013ef5f3/image.jpg',
    },
    revalidate: 60,
  }
}