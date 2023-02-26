import React from "react";
import { useState } from "react";
import styled from "styled-components";
const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [Url, setUrl] = useState(imgs[0]);
  //   console.log(image);

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((item, index) => {
          return (
            <figure key={index + 1}>
              <img
                src={item.url}
                alt={item.filename}
                onClick={() => setUrl(item)}
                className="box-image--style"
              />
            </figure>
          );
        })}
      </div>
      <div className="main-screen">
        <img src={Url.url} alt={Url.filename} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
