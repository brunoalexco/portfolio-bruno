import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/Contact";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-grid" onClick={toggleModalOne}>
            <div className="blog-img">
              <img src={`img/blog/blog-1.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">26/JUN/2023 - BY BRUNO</div>
              <h6>
                <a>
                  The First Tester
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        {/* <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <img src={`img/blog/blog-2.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">05/JAN/2020 - BY SMITH</div>
              <h6>
                <a>
                  Ten Mind-Blowing Reasons Why Design Is Using This Technique
                  For Exposure.
                </a>
              </h6>
            </div>
          </div>
        </div> */}
        {/* End .col for blog-2 */}

        {/* <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div className="blog-grid" onClick={toggleModalThree}>
            <div className="blog-img">
              <img src={`img/blog/blog-3.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">12/AUG/2020 - BY RIO</div>
              <h6>
                <a>
                  I Will Tell You The Truth About Design In The Next 60 Seconds.
                </a>
              </h6>
            </div>
          </div>
        </div> */}
        {/* End .col for blog-3 */}

        {/* <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="800"
        >
          <div className="blog-grid" onClick={toggleModalFour}>
            <div className="blog-img">
              <img src={`img/blog/blog-1.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">22/JUN/2020 - BY SVEIL</div>
              <h6>
                <a>
                  What You Know About Design And What You Don't Know About
                  Design.
                </a>
              </h6>
            </div>
          </div>
        </div> */}
        {/* End .col for blog-4 */}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-1.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      The First Tester
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="/img/about/about-me.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY BRUNO</label>
                        <span>26 JUN 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                    Today I had my first testing session with a beta user for the product I'm working on, which is a B2B solution. I began the meeting by introducing myself and my team, then I asked what they were hoping to get from the product based on what they had heard before. 
                    </p>
                    <p>
                    Next, I gave them a brief overview of the product and how to use it. I have to admit, I was super nervous even though I'm used to this kind of meetings and interviewing potential end users, but this was different, it was a demo session where the small prototype couldn't have many glitches that would put off the tester from trying it with their business, I had to know the product inside and out to answer any questions and make the user feel confident that we know what we're doing.
                    </p>
                    <p>
                    Thankfully, everything went great, they were actually excited about how the product could help them improve their business performance and we scheduled the date and time for the go-live.
                    </p>
                    <h4>Here are some things I learned:</h4>
                    <p>
                    1. Study the product at least a week before the demo, make sure you understand the user's problem, the value proposition and the features. You should always keep this in mind as a PM but if you're not clear about it yet do it as soon as possible as this will help you be confident about the message you want to convey in the meeting and improvise if you ever forget parts of your plan.
                    </p>
                    <p>
                    2. Have a plan. It's good to have the main ideas that you want to share in the demo as a guide for the conversation, this way you won't stray from the main points, you'll avoid forgetting details and you'll save time. Lead the demo but also let the user ask questions and test the product, the feedback is essential.
                    </p>
                    <p>
                    3. If possible, have your team with you, they are another important source of support if the client has technical questions and also to contribute to the conversations also important that the developers can access the information source to avoid miscommunication that might leave out or distort important feedback from the client.
                    </p>
                    <n />
                    <p>
                      In conclusion, as a PM or PO in any testing meeting with clients you need to know your product 100%, bring your team to get the feedback and have a plan for the conversation you'll have, with this you'll be able to have a better product presentation with your client and make a good impression for them to trust you.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                {/* <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div> */}
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}

      {/* Start Modal for Blog-2 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-2.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      Ten Mind-Blowing Reasons Why Design Is Using This
                      Technique For Exposure.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-2.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY SMITH</label>
                        <span>05 JAN 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-2 */}

      {/* Start Modal for Blog-3 */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-3.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      I Will Tell You The Truth About Design In The Next 60
                      Seconds.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-3.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY RIO</label>
                        <span>12 AUG 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-3 */}

      {/* Start Modal for Blog-4 */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-1.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      They Now Bade Farewell To The Kind But Unseen People
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-4.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY SVEIL</label>
                        <span>22 JAN 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-4 */}
    </>
  );
};

export default News;
