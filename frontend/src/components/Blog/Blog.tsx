import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Blog = () => {
  return (
    <div className="blog-main">
        <Link className="back-btn" to='/'><BiArrowBack/> Back</Link>
      <p className="blog-head-title">Voting and election laws</p>
      <p className="blog-head-des">
        Learn how campaign contribution limits, accessibility rules, and other
        federal election laws help protect your voting rights and the election
        process.
      </p>
      <div className="blog-grid">
      
      <a className="blog-card" target="blank" href="https://www.usa.gov/voter-id"  >
        <div className="" >
          <p className="blog-title"  >Voter ID requirements</p>
          <p>
            Each state sets its own voter ID rules. And most require voters to
            bring identification to vote in person. Know the voter ID laws in
            your state before going to the polls.
          </p>
        </div>
      </a>
      <a className="blog-card" href="https://www.usa.gov/voter-fraud">
        <div>
          <p className="blog-title">Voter fraud and other election crimes</p>
          <p>
            If you witness or suspect election crimes, you can report them.
            Learn where to report voter fraud and voting rights violations.
          </p>
        </div>
      </a>
      <a className="blog-card" href="https://www.usa.gov/voting-rights">
        <div>
          <p className="blog-title">Voting rights laws and constitutional amendments</p>
          <p>
            Federal laws govern voting rights. Learn about the laws and how they
            protect your rights and make it easier for you to vote.
          </p>
        </div>
      </a>
      <a className="blog-card" href="usa.gov/voter-accessibility-laws">
        <div>
          <p className="blog-title">Voter accessibility laws</p>
          <p>
            Voter accessibility laws ensure that people with disabilities or
            language barriers are able to vote. Learn about the laws and the
            accommodations they provide.
          </p>
        </div>
      </a>
      </div>
      
    </div>
  );
};

export default Blog;
