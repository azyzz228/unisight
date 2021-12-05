# Inspiration 💡

**E-Learning has become the new normal in this Pandemic era.** Besides, for students, video conferencing tools have become the part & parcel of daily activities. But in general, this leads to *feeble face-to-face traditional interaction between lecturers and students* degrading the interest in online education extensively in the last few months, globally! *We aim to* **innovate a revolutionary tool** *that helps teachers and students improve the online learning experience for the better.*

![unisight-logo](https://i.postimg.cc/9FHf4dgF/unisight.png)

We believe that with the power of AI, this can be solved if proceeded creatively. Thus we made **UniSight**! ✨

# So what’s the app about? 🤔

Unisight captures the realtime expressions of the student throughout the duration of the class which will help the person on the other side of the screen understand their flow turning online learning into a fun, interesting & productive experience. We plan to use different technologies & cutting edge AI methods to extract the data & generate instant analytics.

*Say goodbye to boring lectures, switch to* **Unisight**! 🚀

# Tech Stack 🏗
First and foremost, it is Crafted with 💙. 
For the front-end, we’ve used *React.js* & *Tailwind* as CSS framework. The Authentication (OAuth) has been done by *Firebase* & we’re also using the Cloudstore database for storing user logs. 

To create this, we trained a *custom sentiment analysis model* which is used to analyze & predict the user emotions directly from the input video. The model used *Tensorflow.js* under the hood to process the data directly on the client-side & hence no data is being sent to the server which also *preserves privacy*.

![ML-arch](https://i.postimg.cc/7Y5kXfCJ/ML-model-architecture.png)

For heartbeat detection, we have taken the advantage of **Mayer waves** — oscillations of arterial pressure that occur in conscious subjects. Using these, we determine your heart rate by monitoring the tiny fluctuations in the color of the forehead. This is done by taking the average pixel values of the forehead region and performing a Fourier Transform to convert this signal to a sum of frequencies, the most prominent of which will correspond to the user's heart rate.

**The net data is then averaged and passed into a chart library where all of these calculations are made in real-time to populate the average analytics infront of us.**

![t-s](https://i.postimg.cc/L5TnThhb/techteam.png)

# Challenges We ran into 🧱
There were a lot of challenges on our way. First, because we are all online and spread around the globe, it was somewhat difficult for us to be communicating during the process. We also spent a great deal of time discussing ideas for the project. As we forwarded, we had to fix critical bugs & obviously, compiling chunks of modules into one was the most difficult part! 

---
## Design 🎨

We were heavily inspired by the revised version of **Iterative** design process, which not only includes visual design, but a full-fledged research cycle in which you must discover and define your problem before tackling your solution & then finally deploy it.

![Double-Diamond](https://i.postimg.cc/bvQV3jHt/doublediamonddesignprocess.png)

> 1. **Discover**: a deep dive into the problem we are trying to solve.
> 2. **Define**: synthesizing the information from the discovery phase into a problem definition.
> 3. **Develop**: think up solutions to the problem.
> 4. **Deliver**: pick the best solution and build that.

This time went for the minimalist **Material UI** design. We utilized design tools like Figma,  Photoshop & Illustrator to prototype our designs before doing any coding. Through this, we are able to get iterative feedback so that we spend less time re-writing code.

![figma-overview](https://i.postimg.cc/P5qdg2FJ/Figma-Prototype-View.png)

---

# Research 📚
Research is the key to empathizing with users: we found our specific user group early and that paves the way for our whole project. Here are a few of the resources that were helpful to us —

- A multi-task approach using deep learning (ArXiv, Oct 2021) — https://arxiv.org/pdf/2110.15028.pdf
- Real Time Heart Rate Monitoring from Facial RGB Color Video Using Webcam — bit.ly/3pq9syt
- TFjs docs : https://js.tensorflow.org/api/latest
- Distractions via new Technologies ft. students — bit.ly/3DjOtlO
- 84% of teachers facing challenges during online classes — bit.ly/3pq9W7L



**CREDITS**
- **Design Resources** : Freepik
- **Icons** : Icons8, fontawesome
- **Font** : Roboto / Raleway / RF Dewi / Muller

# Takeaways
### Accomplishments that we're proud of 🙌
**A fully working prototype**! This has been intense yet insightful. We are proud of the final product we designed and engineered within such a short timeframe of 24hrs. The fluidity of the user's experience is something that we take pride in as we strive to return a sense of serenity to the oftentimes stressful and difficult process of studying and learning. *This could not have been achieved without synergizing modular components to enhance the learning process.*


### What we learned 🙌
**Staying hydrated was our motto for completing this impactful and complicated project on time.** We have learned how great wins are accomplished by working together. Apart from the above, together we had a lot of fun participating in **[KHE'21](https://khe.io)** & these are the few things we learned —

Learned about Design Centric approaches & Figma Prototyping

- Explored different kinds of open-sourced chart libraries
- Improved Time management skills
- Optimizing Machine Learning Models
- Leveraging Tailwind CSS to quickly style React Components


### What's next for Unisight 📃
*We believe that our App has great potential*. Besides, we plan to expand Unisight's capabilities by *incorporating other languages*, for right now it can natively process *English* transcripts only. This will not only permit a *greater audience to transform their education* of more people but also facilitate the exchange of diverse information and technical expertise globally. Additionally, we intend to continue improving the accuracy and speed of our Machine learning Model to provide better accuracy & low-spec support. 

**Note** — **API credentials have been revoked. If you want to run the same on your local, use your own credentials.**
