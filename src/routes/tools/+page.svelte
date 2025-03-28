<script lang="ts">
  import { BackButton } from '$lib/components';
  import { DESIGN, DEVELOPMENT, PRODUCTIVITY } from '$lib/config/tools';
  import DeviconAndroidstudio from '~icons/devicon/androidstudio';
  import DeviconTrello from '~icons/devicon/trello';
  import GardenGithubFill16 from '~icons/garden/github-fill-16';
  import LogosAdobePhotoshop from '~icons/logos/adobe-photoshop';
  import LogosFigma from '~icons/logos/figma';
  import LogosMicrosoftWindowsIcon from '~icons/logos/microsoft-windows-icon';
  import LogosObsidianIcon from '~icons/logos/obsidian-icon';
  import LogosVisualStudioCode from '~icons/logos/visual-studio-code';
  import LogosXcode from '~icons/logos/xcode';
  import SimpleIconsApple from '~icons/simple-icons/apple';
  import VscodeIconsFileTypeExcalidraw from '~icons/vscode-icons/file-type-excalidraw';

  const icons: Record<string, any> = {
    figma: LogosFigma,
    photoshop: LogosAdobePhotoshop,
    excalidraw: VscodeIconsFileTypeExcalidraw,
    obsidian: LogosObsidianIcon,
    trello: DeviconTrello,
    apple: SimpleIconsApple,
    windows: LogosMicrosoftWindowsIcon,
    vscode: LogosVisualStudioCode,
    github: GardenGithubFill16,
    xcode: LogosXcode,
    androidstudio: DeviconAndroidstudio
  };
</script>

<div class="w-full">
  <BackButton />
  <div class="mt-5 flex w-full flex-col gap-y-10">
    <div>
      <h1 class="mb-1 text-2xl font-bold">Tools</h1>
      <p>Tools and software I use daily</p>
    </div>

    {#each [DESIGN, PRODUCTIVITY, DEVELOPMENT] as tools}
      <div class="flex flex-col gap-y-4 rounded-xl border border-border px-3 py-5 sm:gap-y-6">
        <h2 class="px-2 text-lg font-medium">{tools.category}</h2>
        <div class="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
          {#each tools.tools as tool}
            <a
              class="group relative hover:bg-transparent"
              href={tool.href}
              id={tool.name}
              target="_blank"
            >
              <div class="relative flex flex-row items-center gap-x-4 px-2 py-0.5 transition-all">
                <div
                  class="absolute -inset-0 z-10 rounded-lg border border-border bg-muted opacity-0 transition-all group-hover:opacity-50"
                ></div>
                {#if tool.iconPath}
                  <svelte:component
                    this={icons[tool.iconPath]}
                    class="z-20 h-10 w-10 rounded-lg bg-muted p-2"
                  />
                {/if}
                <div class="z-20 flex flex-col">
                  <h3 class="font-medium">{tool.name}</h3>
                  <p class="text-muted-foreground">{tool.description}</p>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
