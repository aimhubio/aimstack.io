import React, { FC } from 'react';
import { TeamStyle, TeamList, TeamItem, TeamImage } from './Team.style';
import { Icon } from 'components/UIkit';
import { Text, Container, Flex } from 'styles/foundations';
import Image from 'next/image';

interface ITeamList {
  fullName: string;
  jobTitle: string;
  description: string;
  image: string;
  shape: string;
}

interface ITeam {
  team: ITeamList[];
}

const Team = ({ team }: ITeam) => {
  return (
    <TeamStyle>
      <Container>
        <Text as="h3" size={8} css={{ marginBottom: '$6' }}>
          AimStack Team
        </Text>
        <Text size={4}>
          We are thankful to the awesome Aim community for the constant feedback
          and the trust to build for them the most performant open-source
          experiment tracking tool. Our mission is to democratize the AI Dev
          tools.
        </Text>

        <TeamList>
          {team.map(
            ({ image, fullName, jobTitle, description, shape }, index) => {
              return (
                <TeamItem key={index}>
                  <Flex
                    align={{ '@initial': 'center', '@bp2': 'start' }}
                    direction={{ '@initial': 'column', '@bp2': 'row' }}
                    className="card"
                  >
                    <TeamImage
                      css={{
                        maskImage: `url(${shape})`,
                      }}
                    >
                      <Image
                        src={image}
                        alt={fullName}
                        height={200}
                        width={200}
                        quality={100}
                      />
                    </TeamImage>

                    <div className="card-content">
                      <Text as="h4" size={3} css={{ fontWeight: '$4' }}>
                        {fullName}
                      </Text>
                      <Text size={2} css={{ py: '$2', fontWeight: '$3' }}>
                        {jobTitle}
                      </Text>
                      <Text css={{color: '$black700'}} size={2}>{description}</Text>
                    </div>
                  </Flex>
                </TeamItem>
              );
            }
          )}
        </TeamList>
      </Container>
    </TeamStyle>
  );
};

export default Team;
