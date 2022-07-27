import React from 'react';
import * as S from './BackgroundArea.styled';
import LogoIcon from '@/assets/images/appBackground/landing_logo.svg';
import BeeIcon from '@/assets/images/shared/bee.svg';
import BeeOrangeIcon from '@/assets/images/appBackground/orange_bee.svg';
import SkipIcon from '@/assets/images/appBackground/skip.svg';
import InstagramIcon from '@/assets/images/appBackground/instagram.png';
import { COMMENTS, INSTAGRAM_URL } from '@/constants/app-background';

const BackgroundArea = () => {
	return (
		<S.Container>
			<S.AppDescContainer>
				<S.LogoWrapper>
					<S.Logo src={LogoIcon} alt="Betree Logo" />
				</S.LogoWrapper>

				<S.IntroduceDescWrapper>
					<S.IntroduceDescMainText>칭찬 공유와 아카이브가 가능한 플랫폼</S.IntroduceDescMainText>
					<S.IntroduceDescSubText>
						잘한다, 자란다 <S.IntroduceDescEmphasizedText>Betree</S.IntroduceDescEmphasizedText>
					</S.IntroduceDescSubText>
				</S.IntroduceDescWrapper>

				<S.FadeInCommentList>
					{COMMENTS.map((comment) => {
						return (
							<S.FadeInCommentItem key={comment?.id}>
								<S.FadeInCommentItemImg src={comment?.id % 2 === 0 ? BeeIcon : BeeOrangeIcon} alt="" />
								<S.FadeInCommentItemText>{comment?.text}</S.FadeInCommentItemText>
							</S.FadeInCommentItem>
						);
					})}
					<S.FadeInCommentSkipWarpper>
						<img src={SkipIcon} alt="" />
					</S.FadeInCommentSkipWarpper>
				</S.FadeInCommentList>
				<S.CopyrightWrapper>
					<S.Copyright>Copyright &copy; Betree All rights reserved</S.Copyright>
				</S.CopyrightWrapper>

				<S.InstagramLinkButtonWrapper href={INSTAGRAM_URL} target="_blank">
					<S.InstagramLinkButtonImg src={InstagramIcon} alt="Instagram" />
				</S.InstagramLinkButtonWrapper>
			</S.AppDescContainer>
		</S.Container>
	);
};

export default BackgroundArea;
