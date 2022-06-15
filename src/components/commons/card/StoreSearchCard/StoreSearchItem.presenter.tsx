import * as S from "./StoreSearchItem.styles";

export default function StoreSearchItemPresenterPage(props: any) {
  return (
    <S.ItemMainDiv onClick={props.onClickDetailPage} id={props.id}>
      <S.ImageTitle>일일 특가</S.ImageTitle>
      <S.ItemImg>
        <S.GifticonDiv>
          <S.GifticonImg
            style={{
              backgroundImage: `url(${props.el?.thumbnail})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              overflow: "hidden",
              backgroundPosition: "center",
            }}
          ></S.GifticonImg>
          <S.GifticonLogoDiv>
            <S.GifiticonLogo src="/images/storelogo.png"></S.GifiticonLogo>
          </S.GifticonLogoDiv>
        </S.GifticonDiv>
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoTxtDiv>
            <S.ItemInfoTitle>{props.el?.shopproductname}</S.ItemInfoTitle>
            <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
            <S.ItemInfoSeller>{props.el?.shopseller}</S.ItemInfoSeller>
          </S.ItemInfoTxtDiv>
        </S.ItemInfoTopDiv>
        <S.ItemInfoBottomDiv>
          <S.ItemDCRateDiv>{props.el?.shopdiscount}%</S.ItemDCRateDiv>
          <S.ItemPriceDiv>{props.el?.shopdiscountprice}</S.ItemPriceDiv>
          <S.ItemWonDiv>원</S.ItemWonDiv>
          <S.ItemNoDCPriceDiv>
            {props.el?.shoporiginalprice}원
          </S.ItemNoDCPriceDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
