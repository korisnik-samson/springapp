export async function getStaticProps() {
    const res = await fetch('http://localhost:8080/user/1');
    const data = await res.text();

    return { props: { data } };
}