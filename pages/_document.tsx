import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log(" DOCUMENT PAGE Router");

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" />
        {/* Search engine uchun instruction => 
        web pageni search engine databasega index qilib ol 
        va content dagi page laga follow qilishingiz mumkin degani
        for GOOGLE searching uchun xizmat qiladi
        */}
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        {/** SEO => Search Engine Optimization is below **/}
        <meta
          name="keyword "
          content={" nestar, nestar.uz, devex mern, mern nestjs fullstack"}
        />
        {/* bu keywordlar google da search qlinganda shu kontentdagi
         sozlar kiritilganda google tavsiya qiladi */}
        <meta
          name="description"
          content={
            "Buy and sell properties anywhere and anytime in Korea. | " +
            "Покупайте и продавайте недвижимость в любой точке Южной Кореи в любое время. | " +
            "대한민국 언제 어디서나 부동산을 사고팔 수 있습니다."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
