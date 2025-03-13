import React from "react";
import "./KnowledgeContainer.css";
import node from "../../assets/node.png";

const KnowledgeContainer = () => {
  return (
    <div class="parentKnowledge box" id="knowledge">
      <div class="div1Knowledge">
        <h2>Knowledge: </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia
          neque reprehenderit optio corrupti laboriosam iusto dolores, possimus
          perspiciatis voluptate, magnam ducimus sed reiciendis placeat ratione
          facilis autem vero molestiae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo quia neque reprehenderit optio corrupti
          laboriosam iusto dolores, possimus perspiciatis voluptate, magnam
          ducimus sed reiciendis placeat ratione facilis autem vero molestiae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia
          neque reprehenderit optio corrupti laboriosam iusto dolores, possimus
          perspiciatis voluptate, magnam ducimus sed reiciendis placeat ratione
          facilis autem vero molestiae?
        </p>
      </div>
      <div class="div2Knowledge">
        <img id="imgKnowledge" src={node} alt="node image" />
      </div>
    </div>
  );
};

export default KnowledgeContainer;
