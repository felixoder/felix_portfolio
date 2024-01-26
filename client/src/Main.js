import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Main() {
  return (
    <>
      <h1 className="text-white my-5">Projects</h1>
      <div className="container">
        <div className="card-container">
          <Card sx={{ maxWidth: 300, marginLeft: 5, marginTop: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/images/blog.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="card-container2">
          <Card sx={{ maxWidth: 300, marginLeft: 5, marginTop: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/images/blog.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          {/* Add more cards here */}
        </div>
        <div className="card-container3">
          <Card sx={{ maxWidth: 300, marginLeft: 5, marginTop: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/images/blog.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          {/* Add more cards here */}
        </div>
        <div className="card-container3">
          <Card sx={{ maxWidth: 300, marginLeft: 5, marginTop: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/images/blog.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          {/* Add more cards here */}
        </div>
      </div>

      <div className="others">
        <div className="skills">
          <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mt-5 md:p-0">
            <div class=" col-span-2 p-6 md:col-span-2 lg:col-span-3">
              <div class="text-xl font-medium mt-2 text-zinc-200 mb-5">
                What I know
              </div>
              <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div class=" flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                  <div class="text-primary font-medium text-lg tracking-wider">
                    Frontend
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <div class="rounded-md bg-body text-xs text-primary p-2">
                      HTML
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2">
                      CSS
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                      Tailwind
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">
                      Javascript
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2">
                      Typescript
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                      React Js
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-black/60">
                      Next Js 13
                    </div>
                  </div>
                </div>
                <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                  <div class="text-primary font-medium text-lg tracking-wider">
                    Backend
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-green-500/60">
                      Node Js
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">
                      Express Js
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2">
                      BUN Js
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2">
                      Elysia
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2">
                      Next Auth
                    </div>
                  </div>
                </div>
                <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                  <div class="text-primary font-medium text-lg tracking-wider">
                    Database
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                      MySql
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-emerald-500/60">
                      MongoDB
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                      PostgreSQL
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-red-500/60">
                      Redis
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">
                      Elastic Search
                    </div>
                  </div>
                </div>
                <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                  <div class="text-primary font-medium text-lg tracking-wider">
                    Devops
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                      Docker
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                      Kubernetes
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-orange-500/60">
                      GIT
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2">
                      Jenkins
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2">
                      Ansible
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-purple-500/60">
                      Terraform
                    </div>
                    <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">
                      AWS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid bg-cardPrimary gap-6 p-6 shadow-lg">
              <div class="text-xl font-medium mt-2 text-zinc-200">
                More projects
              </div>
              <div class="grid grid-cols-1 gap-4 rounded-lg">
                <a
                  target="_blank"
                  href="https://github.com/nwaliaez/ezClothing"
                >
                  <div class="flex items-center gap-1 text-primary rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-shirt"
                    >
                      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
                    </svg>
                    <div class="flex flex-1 flex-col px-4 py-2">
                      <div class="flex text-sm font-medium">Ez Clothing</div>
                      <div class="flex text-info text-xs ">
                        Next.js 13, Drizzle, PostgreSql, Docker, ShadCn
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/nwaliaez/HardhatLottery"
                >
                  <div class="flex items-center gap-1 text-primary rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-ticket"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                      <path d="M13 5v2"></path>
                      <path d="M13 17v2"></path>
                      <path d="M13 11v2"></path>
                    </svg>
                    <div class="flex flex-1 flex-col px-4 py-2">
                      <div class="flex text-sm font-medium">
                        Ethereum Lottery
                      </div>
                      <div class="flex text-info text-xs ">
                        Solidity, Ethers, Hardhat, Chai
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/nwaliaez/filetransfer-webrtc"
                >
                  <div class="flex items-center gap-1 text-primary rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-share2"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                    <div class="flex flex-1 flex-col px-4 py-2">
                      <div class="flex text-sm font-medium">
                        File Sharing App
                      </div>
                      <div class="flex text-info text-xs ">
                        Node js, Express, Web Sockets, WebRTC, ReactJs
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </a>
                <a target="_blank" href="https://snake-nwaliaez.vercel.app/">
                  <div class="flex items-center gap-1 text-primary rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-gamepad2"
                    >
                      <line x1="6" x2="10" y1="11" y2="11"></line>
                      <line x1="8" x2="8" y1="9" y2="13"></line>
                      <line x1="15" x2="15.01" y1="12" y2="12"></line>
                      <line x1="18" x2="18.01" y1="10" y2="10"></line>
                      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
                    </svg>
                    <div class="flex flex-1 flex-col px-4 py-2">
                      <div class="flex text-sm font-medium">Snake Game</div>
                      <div class="flex text-info text-xs ">
                        Next.js 13, Tailwind CSS, Typescript
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
        
        
      </div>
      
      
    </>
  );
}
