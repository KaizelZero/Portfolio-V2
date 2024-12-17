<script lang="ts">
  import { base } from '$app/paths';
  import hero from '$lib/assets/851855.webp';
  import { resumeData, siteConfig, socialLinks } from '$lib/config/site-config';
  import ElLinkedin from '~icons/el/linkedin';
  import FaRegularFilePdf from '~icons/fa-regular/file-pdf';
  import LucideBriefcaseBusiness from '~icons/lucide/briefcase-business';
  import LucideMail from '~icons/lucide/mail';
  import LucideMapPin from '~icons/lucide/map-pin';
</script>

<section class="flex flex-col items-center gap-y-7">
  <img
    src={hero}
    alt="profile"
    class="h-28 w-auto rounded-full border-2 border-slate-500 dark:border-slate-200"
    loading="eager"
  />

  <div class="flex flex-col items-center gap-y-4">
    <h1 class="text-3xl font-bold">{siteConfig.author}</h1>
    <div class="flex flex-wrap justify-center gap-x-7 gap-y-3">
      <div class="flex items-center gap-x-2">
        <!-- Job Title -->
        <p class="flex flex-row items-center justify-center gap-x-2">
          <LucideBriefcaseBusiness class="h-5 w-5" />
          {resumeData.job_title}
          <!-- Company -->
          <a href={resumeData.company.url} target="_blank" class="hover:underline">
            {resumeData.company.name}
          </a>
        </p>
        <!-- Status Dot -->
        <span class="relative flex items-center justify-center">
          <span
            class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"
          ></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
        </span>
      </div>
      <!-- Location -->
      <p class="flex flex-row items-center justify-center gap-x-2">
        <LucideMapPin class="h-5 w-5" />
        {resumeData.location}
      </p>
      <!-- Resume Link -->
      <a
        href="{base}/Resume.pdf"
        target="_blank"
        class="flex flex-row items-center justify-center gap-x-2 transition-all hover:opacity-75"
      >
        <FaRegularFilePdf class="h-5 w-5" />
        <span>Download Resume</span>
      </a>
      <!-- Email Link -->
      <a
        href={`mailto:${resumeData.email}`}
        target="_blank"
        class="flex flex-row items-center justify-center gap-x-2 transition-all hover:opacity-75"
      >
        <LucideMail class="h-5 w-5" />
        <span>{resumeData.email}</span>
      </a>
      <!-- LinkedIn Link -->
      <a
        href={socialLinks[1].path}
        target="_blank"
        class="flex flex-row items-center justify-center gap-x-2 transition-all hover:opacity-75"
      >
        <ElLinkedin class="h-5 w-5" />
        <span>Connect on LinkedIn</span>
      </a>
    </div>
  </div>
</section>
