import React from "react";

export default function Type() {
  return (
    <div className="sizes">
      <p>Size</p>
      <div className="variant">
        <form action>
          <p>
            <input type="radio" name="size" id="size-40" />
            <label htmlFor="size-40" className="circle">
              <span>40</span>
            </label>
          </p>
          <p>
            <input type="radio" name="size" id="size-41" />
            <label htmlFor="size-41" className="circle">
              <span>41</span>
            </label>
          </p>
          <p>
            <input type="radio" name="size" id="size-42" />
            <label htmlFor="size-42" className="circle">
              <span>42</span>
            </label>
          </p>
          <p>
            <input type="radio" name="size" id="size-43" />
            <label htmlFor="size-43" className="circle">
              <span>43</span>
            </label>
          </p>
        </form>
      </div>
    </div>
  );
}
