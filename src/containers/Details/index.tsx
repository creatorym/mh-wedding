import { styled } from '../../stitches';

import PageTitle from '../../components/PageTitle';
import InfoItem from './InformationItem';

import NaverMapIcon from '../../components/icons/NaverMapIcon';
import KakaoMapIcon from '../../components/icons/KakaoMapIcon';

const RootContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5rem auto',
});

const ContentsWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '3.75rem 0',
  width: '100%',
});

const WidthLimitWrap = styled('div', {
  padding: '0 2rem',
  width: '100%',
  maxWidth: '30rem',
  boxSizing: 'border-box',
});

const Row = styled('div', {
  display: 'flex',
  variants: {
    type: {
      1: { justifyContent: 'space-between' },
      2: { justifyContent: 'center' },
    },
  },
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  overflow: 'hidden',
});

const MapWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '2rem 0 4rem 0',
  width: '100%',
});

const Map = styled('div', {
  marginBottom: '2rem',
  width: '100%',
  height: '40vh',
  backgroundColor: '$primary500',
  overflow: 'hidden',
});

const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  width: '8.6rem',
  height: '2.4rem',
  borderRadius: '1.2rem',
  borderStyle: 'none',
  boxSizing: 'border-box',
  variants: {
    type: {
      1: { backgroundColor: '#3EAB38', marginRight: '1.5rem' },
      2: { backgroundColor: '#F5E11E' },
    },
  },
});

const ButtonIcon = styled('div', {
  marginRight: '0.4rem',
  width: '1rem',
  height: '1rem',
});

const ButtonText = styled('p', {
  fontSize: '0.875rem',
  fontWeight: '800',
  fontFamily: 'Nanum Square',
  variants: {
    type: {
      1: { color: '#FFFFFF' },
      2: { color: '$primary400' },
    },
  },
});

export default function Details() {
  return (
    <RootContainer>
      <PageTitle>Details</PageTitle>
      <ContentsWrap>
        <WidthLimitWrap>
          <Row type={1}>
            <InfoItem titleTxt="??????">2023??? 3??? 25??? ?????? 12???</InfoItem>
            <InfoItem titleTxt="??????">02-536-4000</InfoItem>
          </Row>
          <Row type={1}>
            <InfoItem titleTxt="??????">
              ??????????????? ????????? ????????? 662 ???????????????
              <br />
              ????????? ?????? ????????? 5??? ???????????? ???
            </InfoItem>
          </Row>
        </WidthLimitWrap>
        <MapWrapper>
          <Map />
          <Row type={2}>
            <Button type={1}>
              <ButtonIcon>
                <NaverMapIcon></NaverMapIcon>
              </ButtonIcon>
              <ButtonText type={1}>????????? ??????</ButtonText>
            </Button>
            <Button type={2}>
              <ButtonIcon>
                <KakaoMapIcon></KakaoMapIcon>
              </ButtonIcon>
              <ButtonText type={2}>????????? ??????</ButtonText>
            </Button>
          </Row>
        </MapWrapper>
        <WidthLimitWrap>
          <Row type={1}>
            <InfoItem titleTxt="??????">
              ??????????????? : ?????? 147, 463 / ?????? 4211
              <br />
              ????????????????????? : ?????? 241, 401 / ?????? 3412, 3414, 6411
            </InfoItem>
          </Row>
          <Row type={1}>
            <InfoItem titleTxt="?????????">
              7?????? ????????? 3??? ?????? ?????? 1???
              <br />
              9?????? ????????? 3????????? ?????? 15???
            </InfoItem>
          </Row>
        </WidthLimitWrap>
      </ContentsWrap>
    </RootContainer>
  );
}
