import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";
import Skeleton from "../../components/Skeleton/Skeleton";
import Text from "../../components/Text/Text";
import { PancakeRoundIcon } from "../../components/Svg";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links, priceLink, cakePriceUsd }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    {
                      item.target === true ?
                        <MenuLink href={item.href} target="_blank">{item.label}</MenuLink>
                        :
                        <MenuLink href={item.href}>{item.label}</MenuLink>
                    }
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
      <div style={{
        margin: "25px 20px 25px 25px",
        borderTop: "1px solid rgba(255, 255, 255, 0.25)",
        paddingTop: "32px",
        paddingBottom: "32px"
      }}>
      {cakePriceUsd ? (
        <PriceLink href={priceLink} target="_blank">
          <PancakeRoundIcon width="24px" mr="8px" />
          <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
        </PriceLink>
      ) : (
        <Skeleton width={80} height={24} />
      )}
      </div>
    </Container>
  );
};

export default PanelBody;
