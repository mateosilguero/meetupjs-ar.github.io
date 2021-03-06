import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import FormatDate from 'utils/FormatDate';

const PostPageFooter = ({ authors, publishedDay }) => (
  <div className="mt4 tc">
    <p className="black-alternative-light f6 mb3 mt0">
      <span>Por </span>
      <strong>{authors}</strong>
      <span>. Publicado el </span>
      <FormatDate date={publishedDay} />
      <span>.</span>
    </p>
    <Link href="/blog.html" passHref>
      <a
        href="#!"
        className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow no-underline ph3 pv2 ttu"
      >
        Ir al blog
      </a>
    </Link>
  </div>
);

PostPageFooter.propTypes = {
  authors: PropTypes.string.isRequired,
  publishedDay: PropTypes.objectOf(Date).isRequired
};

export default PostPageFooter;
