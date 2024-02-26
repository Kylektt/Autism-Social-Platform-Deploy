function VideoSection() {
  return (
    <>
      <div className="video-section">
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/74xku17PEK8?si=QFwpKGZwX8tuVnnI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video-info">
          <h2 className="video-heading">
            The best therapist for your neurodiverse child
          </h2>

          <p className="video-description">
            Embark on a holistic and neurodiverse affirming journey with Green
            Pearls, guided by principles rooted in the latest research (Trembath
            et al., 2022). Our approach centers around the child and family,
            emphasizing individual strengths, holistic well-being, and an
            ethical, culturally sensitive foundation. At Green Pearls, we
            prioritize safety, evidence-based practices, and constant learning
            from qualified practitioners. Our commitment extends to affirming
            parents and families, offering coordinated, timely, and accessible
            support. Join us in creating a future where every neurodiverse child
            thrives, fostering understanding, acceptance, and empowerment for
            all.
          </p>

          <a href="#" className="video-transcription">
            Video Transcription
          </a>
        </div>
      </div>
    </>
  );
}

export default VideoSection;
