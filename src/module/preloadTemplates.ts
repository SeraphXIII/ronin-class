export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "modules/ronin-class/templates"
  ];

  return loadTemplates(templatePaths);
}
