import React from "react";
import styled from "styled-components";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  function getSources(src, extension) {
    const regular = src.replace(".jpg", `.${extension} 1x`);
    const at2x = src.replace(".jpg", `@2x.${extension} 2x`);
    const at3x = src.replace(".jpg", `@3x.${extension} 3x`);
    const sourceString = `${regular}, ${at2x}, ${at3x}`;
    // console.log(sourceString);
    return sourceString;
  }

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcSet={getSources(src, "avif")} />
          <source type="image/jpg" srcSet={getSources(src, "jpg")} />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: block;
  max-width: 100%;
  white-space: nowrap;

  &:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  margin-right: 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  line-height: 1.6;
  color: var(--color-gray-800);
  max-width: fit-content;
`;

export default PhotoGridItem;
