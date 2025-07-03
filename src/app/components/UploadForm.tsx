"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const UploadForm = () => {
  const [latestUpload, setLatestUplaod] = useState("");
  const [fileUpload, setFileUpload] = useState<File | null>(null);

  useEffect(() => {
    console.log(process.env, process.env.NODE_ENV, process.env.BASE_API_URL);
    axios
      .get(
        process.env.BASE_API_URL
          ? `${process.env.BASE_API_URL}/api/hello`
          : "/api/hello"
      )
      .then((response) => console.log(response));
    axios
      .get(
        process.env.BASE_API_URL
          ? `${process.env.BASE_API_URL}/api/latest-upload`
          : "/api/latest-upload"
      )
      .then((response) => {
        setLatestUplaod(response.data);
        console.log(typeof response.data);
        const blob = new Blob([response.data], { type: "text" });
      });
  }, [latestUpload]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFileUpload(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fileUpload) {
      const formData = new FormData();
      formData.append("fileUpload", fileUpload);
      axios
        .post(
          process.env.BASE_API_URL
            ? `${process.env.BASE_API_URL}/api/upload`
            : "/api/upload",
          formData
        )
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
          }
          console.error(response);
        });
    }
  };
  return (
    <div>
      <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          type="file"
          name="fileUpload"
          accept="image/*"
          onChange={handleFileUpload}
        />
        <div>
          <input type="submit" value="Upload avatar" required />
        </div>
      </form>
      <section>
        <h2>Latest upload</h2>
        {latestUpload && <img src="/latest-upload" alt="Latest upload" />}
      </section>
    </div>
  );
};

export default UploadForm;
